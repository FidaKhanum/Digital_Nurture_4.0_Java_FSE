package com.example.demo; // Use your actual package name

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public LoanDto getLoan(@PathVariable String number) {
        return new LoanDto("H00987987972342", "car", 400000, 3258, 18);
    }
}

class LoanDto {
    private String number, type;
    private long loan, emi;
    private int tenure;

    public LoanDto(String number, String type, long loan, long emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loan = loan;
        this.emi = emi;
        this.tenure = tenure;
    }

    public String getNumber() { return number; }
    public String getType() { return type; }
    public long getLoan() { return loan; }
    public long getEmi() { return emi; }
    public int getTenure() { return tenure; }
}
