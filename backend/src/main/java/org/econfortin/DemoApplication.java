package org.econfortin;

import org.econfortin.config.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;

@SpringBootApplication
public class DemoApplication {

    public FilterRegistrationBean jwtFilter() {
        final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new JwtFilter());
        registrationBean.addUrlPatterns("/rest/*");
        return registrationBean;
    }

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
