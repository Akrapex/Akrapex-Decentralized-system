--users table--
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone_number VARCHAR(14) UNIQUE,
    email TEXT UNIQUE NOT NULL,
	password TEXT,
    user_role TEXT NOT NULL CHECK(user_type IN ('regular','agent')),
    email_status BOOLEAN NOT NULL DEFAULT false
);

--properties table--

CREATE TABLE properties(
    id UUID PRIMARY KEY UNIQUE,
    title TEXT NOT NULL,
    price MONEY NOT NULL,
	description TEXT NOT NULL,
    property_type TEXT NOT NULL CHECK (property_type IN ('residential','commercial','land','industrial')),
    property_size TEXT,
	trade_option TEXT NOT NULL CHECK (trade_option IN ('buy','rent')),
    verification_status BOOLEAN,
	bedroom INT,
	bathroom INT,
	created_on TIMESTAMP DEFAULT NOW(),
    owners_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE search_preference(
    id SERIAL PRIMARY KEY UNIQUE,
    trade_option TEXT CHECK(trade_option IN ('buy','sell','rent')),
    property_type TEXT CHECK (property_type IN ('residential','commercial','land','industrial')),
    price_range TEXT[],
    bedrooms INT,
    bathrooms INT,
    features JSONB,
    keywords TEXT[],
	users_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE
);


-- --FAVOURITES TABLE--
-- CREATE TABLE favourites(
--     id ,
--     properties_id,
--     owners_id,
-- );

-- --NOTIFICATION TABLES--
-- CREATE TABLE notifications(
--     id,
--     date,
--     status,
--     message,
--     title
-- );

-- -- --TRANSACTIONS TABLE--
-- -- CREATE TABLE transactions(
-- --     id,--pending , completed ,cancelled--
-- --     transaction_status,
-- --     property_id,
-- --     user_id
-- -- );


-- -- --PAYMENT INFO --
-- -- CREATE TABLE payment_info()
-- -- --RATINGS TABLE--


-- CREATE TABLE ratings(
--     id,
--     property_score,
-- );

-- --PROPERTY IMAGE--
-- CREATE TABLE property_assets(
--     id,
--     images,
--     certificates,
--     owrner_id,
--     others
-- );

-- --OPTIONAL TABLES--

-- --MESSAGES TABLE--
-- CREATE TABLE messages();

-- --KYC--


-- --SUBSCRIPTION--
