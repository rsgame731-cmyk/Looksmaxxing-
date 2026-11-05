/**
 * Checkout & Payment Redirect Configuration
 * 
 * Replace CHECKOUT_URL with your Stripe Payment Link, Gumroad, Lemon Squeezy,
 * Whop, Shopify, or direct checkout URL.
 * 
 * You can also set VITE_CHECKOUT_URL in your environment variables.
 */
export const DEFAULT_CHECKOUT_URL = 'https://buy.stripe.com/checkout';

export const getCheckoutUrl = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('astrauw_custom_checkout_url');
    if (saved && saved.trim()) {
      return saved.trim();
    }
  }
  return import.meta.env.VITE_CHECKOUT_URL || DEFAULT_CHECKOUT_URL;
};

export const setCustomCheckoutUrl = (url: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('astrauw_custom_checkout_url', url.trim());
  }
};
