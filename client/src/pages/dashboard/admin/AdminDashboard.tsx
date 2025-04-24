import { Card, CardContent } from "@/components/ui/card";
import { LucideUsers, LucidePackage, LucideShoppingCart } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    count: 1280,
    icon: <LucideUsers className="h-6 w-6 text-secondary" />,
  },
  {
    title: "Total Products",
    count: 230,
    icon: <LucidePackage className="h-6 w-6 text-secondary" />,
  },
  {
    title: "Total Orders",
    count: 542,
    icon: <LucideShoppingCart className="h-6 w-6 text-secondary" />,
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Welcome Back, Admin!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <Card
            key={index}
            className="shadow-md border rounded-2xl transition-all hover:shadow-lg"
          >
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-muted p-3 rounded-full">{item.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-2xl font-bold text-gray-800">{item.count}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
