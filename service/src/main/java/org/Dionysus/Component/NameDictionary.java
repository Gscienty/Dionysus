package org.Dionysus.Component;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Repository;

@EnableAutoConfiguration
@Repository
public class NameDictionary {
    public String getName() { return "Dionysus"; }
}