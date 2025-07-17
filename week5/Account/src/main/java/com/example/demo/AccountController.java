package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public AccountDto getAccount(@PathVariable String number) {
        return new AccountDto("00987987973432", "savings", 234343);
    }
}

class AccountDto {
    private String number, type;
    private long balance;

    public AccountDto(String number, String type, long balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

    public String getNumber() { return number; }
    public String getType() { return type; }
    public long getBalance() { return balance; }
}
