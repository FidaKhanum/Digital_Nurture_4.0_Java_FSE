DECLARE
  CURSOR loan_cursor IS SELECT LoanID, InterestRate FROM Loans;
BEGIN
  FOR rec IN loan_cursor LOOP
    UPDATE Loans
    SET InterestRate = rec.InterestRate + 0.5
    WHERE LoanID = rec.LoanID;
  END LOOP;
  COMMIT;
END;
/
