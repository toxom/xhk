use jsonwebtoken::{encode, decode, Header, EncodingKey, DecodingKey, Validation};
use serde::{Serialize, Deserialize};
use std::time::{SystemTime, UNIX_EPOCH};

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    sub: String,
    exp: usize,
    role: String,
}

pub struct Auth {
    encoding_key: EncodingKey,
    decoding_key: DecodingKey,
}

impl Auth {
    pub fn new(secret: &[u8]) -> Self {
        Self {
            encoding_key: EncodingKey::from_secret(secret),
            decoding_key: DecodingKey::from_secret(secret),
        }
    }

    pub fn generate_token(&self, user_id: &str, role: &str) -> Result<String, jsonwebtoken::errors::Error> {
        let expiration = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap()
            .as_secs() as usize + 24 * 3600; // 24 hours

        let claims = Claims {
            sub: user_id.to_string(),
            exp: expiration,
            role: role.to_string(),
        };

        encode(&Header::default(), &claims, &self.encoding_key)
    }

    pub fn verify_token(&self, token: &str) -> Result<Claims, jsonwebtoken::errors::Error> {
        decode::<Claims>(
            token,
            &self.decoding_key,
            &Validation::default()
        ).map(|token_data| token_data.claims)
    }
}