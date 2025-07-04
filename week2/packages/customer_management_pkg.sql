CREATE OR REPLACE PACKAGE CustomerManagement AS
  PROCEDURE AddCustomer(id NUMBER, name VARCHAR2, dob DATE, balance NUMBER);
  PROCEDURE UpdateCustomerBalance(id NUMBER, amount NUMBER);
  FUNCTION GetBalance(id NUMBER) RETURN NUMBER;
END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS
  PROCEDURE AddCustomer(id NUMBER, name VARCHAR2, dob DATE, balance NUMBER) IS
BEGIN
  INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified, IsVIP)
  VALUES (id, name, dob, balance, SYSDATE, 'N');
END;


  PROCEDURE UpdateCustomerBalance(id NUMBER, amount NUMBER) IS
  BEGIN
    UPDATE Customers SET Balance = Balance + amount WHERE CustomerID = id;
  END;

  FUNCTION GetBalance(id NUMBER) RETURN NUMBER IS
    bal NUMBER;
  BEGIN
    SELECT Balance INTO bal FROM Customers WHERE CustomerID = id;
    RETURN bal;
  END;
END CustomerManagement;
/
