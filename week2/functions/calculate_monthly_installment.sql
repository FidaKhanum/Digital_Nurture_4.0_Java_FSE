CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
  loan_amt NUMBER,
  rate     NUMBER,
  years    NUMBER
) RETURN NUMBER
IS
  monthly_rate NUMBER := rate / 1200;
  months       NUMBER := years * 12;
BEGIN
  RETURN loan_amt * monthly_rate / (1 - POWER(1 + monthly_rate, -months));
END;
/
