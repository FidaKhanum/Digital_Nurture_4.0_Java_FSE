DECLARE
  CURSOR fee_cursor IS SELECT AccountID FROM Accounts;
BEGIN
  FOR acc IN fee_cursor LOOP
    UPDATE Accounts
    SET Balance = Balance - 100
    WHERE AccountID = acc.AccountID;
  END LOOP;
  COMMIT;
END;
/
