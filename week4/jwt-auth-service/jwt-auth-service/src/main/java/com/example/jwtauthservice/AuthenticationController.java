package com.example.jwtauthservice;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

    private static final String SECRET_KEY = "mySecretKey";  // Replace with environment var in real apps

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String[] credentials = decodeBasicAuth(authHeader);
        String username = credentials[0];
        String password = credentials[1];

        // Simulate login check — replace with real DB check later
        if ("user".equals(username) && "pwd".equals(password)) {
            String token = Jwts.builder()
                    .setSubject(username)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 10)) // 10 minutes
                    .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                    .compact();

            Map<String, String> tokenMap = new HashMap<>();
            tokenMap.put("token", token);
            return ResponseEntity.ok(tokenMap);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    private String[] decodeBasicAuth(String authHeader) {
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);
        return credentials.split(":", 2);
    }
}
