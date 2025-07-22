CREATE OR REPLACE PROCEDURE TransferFunds (
  from_acc IN NUMBER,
  to_acc   IN NUMBER,
  amt      IN NUMBER
)
IS
  bal NUMBER;
BEGIN
  SELECT Balance INTO bal FROM Accounts WHERE AccountID = from_acc;

  IF bal < amt THEN
    RAISE_APPLICATION_ERROR(-20002, 'Insufficient Balance');
  END IF;

  UPDATE Accounts SET Balance = Balance - amt WHERE AccountID = from_acc;
  UPDATE Accounts SET Balance = Balance + amt WHERE AccountID = to_acc;

  COMMIT;
END;
/
