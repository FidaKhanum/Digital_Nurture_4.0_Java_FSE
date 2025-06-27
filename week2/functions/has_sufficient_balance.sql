CREATE OR REPLACE FUNCTION HasSufficientBalance (
  acc_id IN NUMBER,
  amt    IN NUMBER
) RETURN BOOLEAN
IS
  bal NUMBER;
BEGIN
  SELECT Balance INTO bal FROM Accounts WHERE AccountID = acc_id;
  RETURN bal >= amt;
EXCEPTION
  WHEN OTHERS THEN
    RETURN FALSE;
END;
/
