import Ticket from "../components/modules/ticket";
import Tickets from "../components/modules/ticket/tickets";
import Order from "../components/modules/order";
import Dashboard from "../components/modules/dashboard";
export const routes: any = {
  common: [
    {
      name: "Dashboard",
      path: "/",
      component: Dashboard,
    },
    {
      name: "Ticket",
      path: "/ticket",
      component: Ticket,
    },
    {
      name: "Order",
      path: "/order",
      component: Order,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashboard,
    },
  ],
  CUSTOMER: [],
  TICKET_MANAGER: [
    {
      name: "Tickets",
      path: "/tickets",
      component: Tickets,
    },
  ],
};
