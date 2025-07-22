CREATE OR REPLACE PROCEDURE AddNewCustomer (
  p_id      IN NUMBER,
  p_name    IN VARCHAR2,
  p_dob     IN DATE,
  p_balance IN NUMBER
)
IS
  duplicate EXCEPTION;
  PRAGMA EXCEPTION_INIT(duplicate, -1);
BEGIN
  INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
  VALUES (p_id, p_name, p_dob, p_balance, SYSDATE);

  COMMIT;

EXCEPTION
  WHEN duplicate THEN
    DBMS_OUTPUT.PUT_LINE('Customer with this ID already exists.');
    ROLLBACK;
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
    ROLLBACK;
END;
/
