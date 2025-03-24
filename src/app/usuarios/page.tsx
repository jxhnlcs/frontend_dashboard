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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

const users = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@exemplo.com",
    role: "Administrador",
    status: "Ativo",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@exemplo.com",
    role: "Editor",
    status: "Ativo",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    email: "pedro@exemplo.com",
    role: "Usuário",
    status: "Inativo",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana@exemplo.com",
    role: "Editor",
    status: "Ativo",
    avatar: "https://github.com/shadcn.png",
  },
];

const stats = [
  {
    title: "Total de Usuários",
    value: "1,234",
    icon: Users,
    change: "+12.5%",
  },
  {
    title: "Novos Usuários",
    value: "45",
    icon: UserPlus,
    change: "+8.2%",
  },
  {
    title: "Usuários Ativos",
    value: "1,180",
    icon: UserCheck,
    change: "+5.1%",
  },
  {
    title: "Usuários Inativos",
    value: "54",
    icon: UserX,
    change: "-2.3%",
  },
];

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-4">
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
                  <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>{" "}
                  em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {user.name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === "Ativo"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {user.status}
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