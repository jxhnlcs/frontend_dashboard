"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const activities = [
  {
    id: 1,
    name: "Atualização do Sistema",
    status: "Concluído",
    date: "2024-03-24",
    duration: "2h",
  },
  {
    id: 2,
    name: "Backup de Dados",
    status: "Em Andamento",
    date: "2024-03-24",
    duration: "1h",
  },
  {
    id: 3,
    name: "Manutenção Preventiva",
    status: "Pendente",
    date: "2024-03-25",
    duration: "3h",
  },
  {
    id: 4,
    name: "Atualização de Segurança",
    status: "Concluído",
    date: "2024-03-23",
    duration: "1.5h",
  },
];

const chartData = [
  { name: "Seg", value: 4 },
  { name: "Ter", value: 3 },
  { name: "Qua", value: 5 },
  { name: "Qui", value: 2 },
  { name: "Sex", value: 6 },
  { name: "Sáb", value: 1 },
  { name: "Dom", value: 2 },
];

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Atividades por Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Lista de Atividades</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Duração</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.name}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          activity.status === "Concluído"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : activity.status === "Em Andamento"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>{activity.duration}</TableCell>
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