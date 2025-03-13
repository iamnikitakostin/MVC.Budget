using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MVC.Budget.Interfaces;
using MVC.Budget.Models;

namespace MVC.Budget.Controllers
{
    public class TransactionsController : Controller
    {
        private readonly ITransactionService _transactionService;
        private readonly ICategoryService _categoryService;
        private readonly IAccountService _accountService;

        public TransactionsController(ICategoryService categoryService, ITransactionService transactionService, IAccountService accountService)
        {
            _categoryService = categoryService;
            _transactionService = transactionService;
            _accountService = accountService;
        }

        // GET: Transactions
        public async Task<IActionResult> Index()
        {
            var transactions = await _transactionService.GetAllAsync();
            return View(transactions);
        }

        // GET: Transactions by Account
        public async Task<IActionResult> GetByAccount(int id)
        {
            var transactions = await _transactionService.GetAllByAccountAsync(id);
            return View(transactions);
        }

        // GET: Transactions/Details/5
        public async Task<IActionResult> Details(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transaction = await _transactionService.GetByIdAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }

            return View(transaction);
        }

        // GET: Transactions/Create
        public async Task<IActionResult> Create()
        {
            var categories = await _categoryService.GetAllAsync();
            var accounts = await _accountService.GetAllAsync();
            ViewData["CategoryId"] = new SelectList(categories, "Id", "Name");
            ViewData["AccountId"] = new SelectList(accounts, "Id", "Name");
            return View();
        }

        // POST: Transactions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,AccountId,Amount,CategoryId")] Transaction transaction)
        {
            ModelState.Remove("Category");
            ModelState.Remove("Account");
            ModelState.Remove("CreatedDate");
            ModelState.Remove("UpdatedDate");
            ModelState.Remove("ExitBalance");

            var categories = await _categoryService.GetAllAsync();
            
            if (ModelState.IsValid)
            {
                await _transactionService.AddAsync(transaction);
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoryId"] = new SelectList(categories, "Id", "Name", transaction.CategoryId);
            return View(transaction);
        }

        // GET: Transactions/Edit/5
        public async Task<IActionResult> Edit(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transaction = await _transactionService.GetByIdAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }
            var categories = await _categoryService.GetAllAsync();
            var accounts = await _accountService.GetAllAsync();

            ViewData["CategoryId"] = new SelectList(categories, "Id", "Name", transaction.CategoryId);
            ViewData["AccountId"] = new SelectList(accounts, "Id", "Name", transaction.CategoryId);
            return View(transaction);
        }

        // POST: Transactions/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,AccountId,Amount,ExitBalance,CategoryId")] Transaction transaction)
        {
            if (id != transaction.Id)
            {
                return NotFound();
            }

            ModelState.Remove("Category");
            ModelState.Remove("Account");
            ModelState.Remove("CreatedDate");
            ModelState.Remove("UpdatedDate");

            if (ModelState.IsValid)
            {
                try
                {
                    await _transactionService.UpdateAsync(transaction);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!await TransactionExists(transaction.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            var categories = await _categoryService.GetAllAsync();

            ViewData["CategoryId"] = new SelectList(categories, "Id", "Name", transaction.CategoryId);
            return View(transaction);
        }

        // GET: Transactions/Delete/5
        public async Task<IActionResult> Delete(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transaction = await _transactionService.GetByIdAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }

            return View(transaction);
        }

        // POST: Transactions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var transaction = await _transactionService.GetByIdAsync(id);
            if (transaction != null)
            {
                await _transactionService.DeleteAsync(transaction.Id);
            }

            return RedirectToAction(nameof(Index));
        }

        private async Task<bool> TransactionExists(int id)
        {
            return await _transactionService.TransactionExists(id);
        }
    }
}
