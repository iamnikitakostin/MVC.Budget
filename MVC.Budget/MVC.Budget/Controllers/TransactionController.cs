using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MVC.Budget.Data;

namespace MVC.Budget.Controllers;
public class TransactionController : Controller
{
    private readonly BudgetDbContext _context;
    public TransactionController(BudgetDbContext dbContext)
    {
        _context = dbContext;
    }

    // GET: TransactionController
    public ActionResult Index()
    {
        return View();
    }

    // GET: TransactionController/Details/5
    public ActionResult Details(int id)
    {
        return View();
    }

    // GET: TransactionController/Create
    public ActionResult Create()
    {
        return View();
    }

    // POST: TransactionController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }

    // GET: TransactionController/Edit/5
    public async Task<IActionResult> Edit(int id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var transaction = await _context.Transactions.FindAsync(id);

        if (transaction == null) 
        { 
            return NotFound();
        }

        return View(transaction);
    }

    // POST: TransactionController/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(int id, IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }

    // GET: TransactionController/Delete/5
    public ActionResult Delete(int id)
    {
        return View();
    }

    // POST: TransactionController/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id, IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }
}
