BEGIN
  FOR rec IN (
    SELECT c.Name, t.*
    FROM Transactions t
    JOIN Accounts a ON t.AccountID = a.AccountID
    JOIN Customers c ON a.CustomerID = c.CustomerID
    WHERE TRUNC(t.TransactionDate, 'MM') = TRUNC(SYSDATE, 'MM')
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Customer: ' || rec.Name || ' | Transaction ID: ' || rec.TransactionID);
  END LOOP;
END;
/
