CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
  bal NUMBER;
BEGIN
  IF :NEW.TransactionType = 'Withdrawal' THEN
    SELECT Balance INTO bal FROM Accounts WHERE AccountID = :NEW.AccountID;
    IF bal < :NEW.Amount THEN
      RAISE_APPLICATION_ERROR(-20003, 'Insufficient balance for withdrawal');
    END IF;
  ELSIF :NEW.TransactionType = 'Deposit' THEN
    IF :NEW.Amount <= 0 THEN
      RAISE_APPLICATION_ERROR(-20004, 'Deposit must be positive');
    END IF;
  END IF;
END;
/
