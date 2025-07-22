CREATE OR REPLACE PACKAGE AccountOperations AS
  PROCEDURE OpenAccount(acc_id NUMBER, cust_id NUMBER, type VARCHAR2, bal NUMBER);
  PROCEDURE CloseAccount(acc_id NUMBER);
  FUNCTION GetTotalBalance(cust_id NUMBER) RETURN NUMBER;
END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS
  PROCEDURE OpenAccount(acc_id NUMBER, cust_id NUMBER, type VARCHAR2, bal NUMBER) IS
  BEGIN
    INSERT INTO Accounts VALUES (acc_id, cust_id, type, bal, SYSDATE);
  END;

  PROCEDURE CloseAccount(acc_id NUMBER) IS
  BEGIN
    DELETE FROM Accounts WHERE AccountID = acc_id;
  END;

  FUNCTION GetTotalBalance(cust_id NUMBER) RETURN NUMBER IS
    total NUMBER;
  BEGIN
    SELECT SUM(Balance) INTO total FROM Accounts WHERE CustomerID = cust_id;
    RETURN total;
  END;
END AccountOperations;
/
