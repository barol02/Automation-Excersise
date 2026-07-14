/**
 * User Data for test
 */
// Generate a unique identifier based on the current timestamp
const uniqueId = Date.now();

export const USER_NAME = `TestUser_${uniqueId}`;
export const USER_EMAIL = `qa_automation_${uniqueId}@example.com`;
export const USER_PASSWORD = `SecurePass!${uniqueId}`;

export const USER_BIRTH_DAY = "15";
export const USER_BIRTH_MONTH = "September";
export const USER_BIRTH_YEAR = "1995";

export const USER_FIRST_NAME = "Alex";
export const USER_LAST_NAME = `Tester_${uniqueId}`;

export const COMPANY = "Automation Inc.";
export const USER_ADDRESS1 = "123 Automation Street";
export const USER_ADDRESS2 = "Suite 404";
export const USER_COUNTRY = "United States";
export const USER_STATE = "California";
export const USER_CITY = "San Jose";
export const USER_ZIPCODE = "95101";

export const USER_MOBILE_NUMBER = Math.floor(100000000 + Math.random() * 900000000).toString();

