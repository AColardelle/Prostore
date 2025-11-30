import { auth } from "@/auth";
import { getMyCart } from "@/lib/actions/cart.action"
import { Metadata } from "next";
import { redirect } from "next/navigation";
import {ShippingAddress} from "@/type";
import { getUserById } from "@/lib/actions/users.actions";
import ShippingAddressForm from "./shipping-adress-form";
import CheckoutStep from "@/components/shared/checkout-steps";

export const metadata: Metadata = {
  title: 'Shipping Address',
}


const ShippingAddress = async () => {
  const cart = await getMyCart()
  if (!cart || cart.items.length === 0) {
    redirect('/cart');
  }
  
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error('No user ID');
  }
  const user = await getUserById(userId);
  
  return (
    <>
      <CheckoutStep current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
};

export default ShippingAddress;