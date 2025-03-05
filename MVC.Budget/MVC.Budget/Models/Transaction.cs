namespace MVC.Budget.Models;

public class Transaction
{
    public int Id {  get; set; }
    public string Name { get; set; }
    public string AccountId { get; set; }
    public decimal Amount { get; set; }
    public decimal ExitBalance { get; set; }
    public DateTime CreatedDate { get; set; }
    public Category Category { get; set; }
}
