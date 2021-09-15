using System;
using Models;

namespace UI
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to My Store!");
            Customer newCustomer = new Customer();
            newCustomer.Age = 1000;

            StoreFront myStore = new StoreFront() {
                Name = "MY Store",
                Address = "123 NW abc ave, Portland, OR"
            };
            Console.WriteLine(myStore.ToString());
            myStore.Name = Console.ReadLine();
            Console.WriteLine(myStore.ToString());

        }
    }
}
