CREATE OR REPLACE PROCEDURE SafeTransferFunds (
  from_acc_id IN NUMBER,
  to_acc_id   IN NUMBER,
  amount      IN NUMBER
)
IS
  insufficient_funds EXCEPTION;
  from_balance NUMBER;
BEGIN
  SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_acc_id;

  IF from_balance < amount THEN
    RAISE insufficient_funds;
  END IF;

  UPDATE Accounts SET Balance = Balance - amount WHERE AccountID = from_acc_id;
  UPDATE Accounts SET Balance = Balance + amount WHERE AccountID = to_acc_id;

  COMMIT;

EXCEPTION
  WHEN insufficient_funds THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient funds.');
    ROLLBACK;
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK;
END;
/
