CREATE OR REPLACE PACKAGE EmployeeManagement AS
  PROCEDURE HireEmployee(id NUMBER, name VARCHAR2, pos VARCHAR2, sal NUMBER, dept VARCHAR2, hdate DATE);
  PROCEDURE UpdateDetails(id NUMBER, sal NUMBER);
  FUNCTION AnnualSalary(id NUMBER) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS
  PROCEDURE HireEmployee(id NUMBER, name VARCHAR2, pos VARCHAR2, sal NUMBER, dept VARCHAR2, hdate DATE) IS
  BEGIN
    INSERT INTO Employees VALUES (id, name, pos, sal, dept, hdate);
  END;

  PROCEDURE UpdateDetails(id NUMBER, sal NUMBER) IS
  BEGIN
    UPDATE Employees SET Salary = sal WHERE EmployeeID = id;
  END;

  FUNCTION AnnualSalary(id NUMBER) RETURN NUMBER IS
    sal NUMBER;
  BEGIN
    SELECT Salary * 12 INTO sal FROM Employees WHERE EmployeeID = id;
    RETURN sal;
  END;
END EmployeeManagement;
/
