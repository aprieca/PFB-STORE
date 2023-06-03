plugins {
	java
	war
	id("org.springframework.boot") version "3.0.7"
	id("io.spring.dependency-management") version "1.0.15.RELEASE"
}

group = "com.kreitek"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-validation")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-security")
	implementation ("io.jsonwebtoken:jjwt-api:0.11.5")
	runtimeOnly ("io.jsonwebtoken:jjwt-impl:0.11.5")
	runtimeOnly ("io.jsonwebtoken:jjwt-jackson:0.11.5")
	runtimeOnly("com.h2database:h2")
	implementation("org.mapstruct:mapstruct:1.5.5.Final")
	compileOnly ("org.projectlombok:lombok:1.18.28")
	annotationProcessor ("org.projectlombok:lombok:1.18.28")
	testCompileOnly("org.projectlombok:lombok:1.18.28")
	testAnnotationProcessor("org.projectlombok:lombok:1.18.28")
	implementation ("org.projectlombok:lombok-mapstruct-binding:0.2.0")
	annotationProcessor ("org.mapstruct:mapstruct-processor:1.5.5.Final")
	providedRuntime("org.springframework.boot:spring-boot-starter-tomcat")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
