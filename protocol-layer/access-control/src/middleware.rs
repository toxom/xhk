use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

pub struct AccessControlMiddleware {
    pub auth_token: String,
}

impl AccessControlMiddleware {
    pub fn new(token: String) -> Self {
        Self {
            auth_token: token,
        }
    }

    pub fn process<'a>(&'a self) -> impl Future<Output = Result<(), String>> + 'a {
        async move {
            // Verify token and permissions
            if self.auth_token.is_empty() {
                return Err("Unauthorized".to_string());
            }
            Ok(())
        }
    }
}

pub struct MiddlewareChain {
    middlewares: Vec<Box<dyn Fn() -> Pin<Box<dyn Future<Output = Result<(), String>>>>>>,
}

impl MiddlewareChain {
    pub fn new() -> Self {
        Self {
            middlewares: Vec::new(),
        }
    }

    pub fn add<F, Fut>(&mut self, middleware: F)
    where
        F: Fn() -> Fut + 'static,
        Fut: Future<Output = Result<(), String>> + 'static,
    {
        self.middlewares.push(Box::new(move || Box::pin(middleware())));
    }
}