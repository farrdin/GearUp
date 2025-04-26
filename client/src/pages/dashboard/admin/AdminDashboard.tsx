import { Card, CardContent } from "@/components/ui/card";
import { useGetBicyclesQuery } from "@/redux/features/bicycle/bicycleApi";
import { useGetAllOrdersQuery } from "@/redux/features/order/orderApi";
import { useGetUserQuery } from "@/redux/features/user/userApi";
import { LucideUsers, LucidePackage, LucideShoppingCart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AdminDashboard = () => {
  const { data: users } = useGetUserQuery({});
  const { data: orders } = useGetAllOrdersQuery({});
  const { data: bicycles } = useGetBicyclesQuery({});

  const userCount = users?.data?.length || 0;
  const orderCount = orders?.data?.length || 0;
  const bicycleCount = bicycles?.data?.length || 0;

  const stats = [
    {
      title: "Total Users",
      count: userCount,
      icon: <LucideUsers className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Total Products",
      count: bicycleCount,
      icon: <LucidePackage className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Total Orders",
      count: orderCount,
      icon: <LucideShoppingCart className="h-6 w-6 text-secondary" />,
    },
  ];

  const chartData = [
    { name: "Users", value: userCount },
    { name: "Products", value: bicycleCount },
    { name: "Orders", value: orderCount },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Welcome Back, Admin!
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Overview Chart
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
