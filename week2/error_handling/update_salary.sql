CREATE OR REPLACE PROCEDURE UpdateSalary (
  emp_id IN NUMBER,
  percent IN NUMBER
)
IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * percent / 100)
  WHERE EmployeeID = emp_id;

  IF SQL%ROWCOUNT = 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Employee not found');
  END IF;

  COMMIT;

EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK;
END;
/
