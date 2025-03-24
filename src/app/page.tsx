"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Activity, LineChart, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  { name: "Jan", value: 400 },
  { name: "Fev", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Abr", value: 800 },
  { name: "Mai", value: 700 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1000 },
];

const analyticsData = [
  {
    name: "Jan",
    usuarios: 400,
    atividades: 300,
    performance: 85,
    engajamento: 75,
  },
  {
    name: "Fev",
    usuarios: 450,
    atividades: 350,
    performance: 88,
    engajamento: 78,
  },
  {
    name: "Mar",
    usuarios: 500,
    atividades: 400,
    performance: 90,
    engajamento: 82,
  },
  {
    name: "Abr",
    usuarios: 550,
    atividades: 450,
    performance: 92,
    engajamento: 85,
  },
  {
    name: "Mai",
    usuarios: 600,
    atividades: 500,
    performance: 95,
    engajamento: 88,
  },
  {
    name: "Jun",
    usuarios: 650,
    atividades: 550,
    performance: 97,
    engajamento: 90,
  },
  {
    name: "Jul",
    usuarios: 700,
    atividades: 600,
    performance: 98,
    engajamento: 92,
  },
];

const stats = [
  {
    title: "Usuários Ativos",
    value: "2,850",
    icon: Users,
    change: "+12.5%",
  },
  {
    title: "Atividades",
    value: "1,245",
    icon: Activity,
    change: "+8.2%",
  },
  {
    title: "Taxa de Crescimento",
    value: "24.5%",
    icon: TrendingUp,
    change: "+2.1%",
  },
];

const recentActivities = [
  {
    id: 1,
    user: "João Silva",
    action: "Atualizou o perfil",
    time: "2 minutos atrás",
    status: "Concluído",
  },
  {
    id: 2,
    user: "Maria Santos",
    action: "Criou novo projeto",
    time: "15 minutos atrás",
    status: "Em Andamento",
  },
  {
    id: 3,
    user: "Pedro Oliveira",
    action: "Completou tarefa",
    time: "1 hora atrás",
    status: "Concluído",
  },
  {
    id: 4,
    user: "Ana Costa",
    action: "Adicionou novo usuário",
    time: "2 horas atrás",
    status: "Concluído",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">{stat.change}</span> em relação
                  ao mês anterior
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análise de Desempenho</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="analytics">Análise</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="usuarios"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.3}
                      name="Usuários"
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="atividades"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.3}
                      name="Atividades"
                    />
                    <Area
                      yAxisId="right"
                      type="monotone"
                      dataKey="performance"
                      stroke="#ffc658"
                      fill="#ffc658"
                      fillOpacity={0.3}
                      name="Performance (%)"
                    />
                    <Area
                      yAxisId="right"
                      type="monotone"
                      dataKey="engajamento"
                      stroke="#ff7300"
                      fill="#ff7300"
                      fillOpacity={0.3}
                      name="Engajamento (%)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Ação</TableHead>
                  <TableHead>Tempo</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.user}</TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.time}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          activity.status === "Concluído"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
