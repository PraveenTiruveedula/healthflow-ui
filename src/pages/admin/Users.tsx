import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Plus, Pencil } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Nurse";
  status: "Active" | "Inactive";
}

const mockUsers: User[] = [
  { id: "U-001", name: "Dr. Amanda Foster", email: "afoster@clintrial.com", role: "Admin", status: "Active" },
  { id: "U-002", name: "Nurse Rachel Kim", email: "rkim@clintrial.com", role: "Nurse", status: "Active" },
  { id: "U-003", name: "Dr. David Park", email: "dpark@clintrial.com", role: "Admin", status: "Active" },
  { id: "U-004", name: "Nurse Tom Bradley", email: "tbradley@clintrial.com", role: "Nurse", status: "Inactive" },
];

const AdminUsers = () => {
  const [users] = useState(mockUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRole, setFormRole] = useState<string>("Nurse");

  const openAdd = () => {
    setEditUser(null);
    setFormName("");
    setFormEmail("");
    setFormRole("Nurse");
    setModalOpen(true);
  };

  const openEdit = (user: User) => {
    setEditUser(user);
    setFormName(user.name);
    setFormEmail(user.email);
    setFormRole(user.role);
    setModalOpen(true);
  };

  return (
    <AdminLayout title="Users">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">{users.length} team members</p>
        <Button onClick={openAdd} className="gap-2 rounded-xl">
          <Plus className="h-4 w-4" /> Add User
        </Button>
      </div>

      <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className={`text-sm font-medium ${user.status === "Active" ? "text-success" : "text-muted-foreground"}`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="gap-1.5" onClick={() => openEdit(user)}>
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editUser ? "Edit User" : "Add User"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Full name"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="email@clintrial.com"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={formRole} onValueChange={setFormRole}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Nurse">Nurse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)} className="rounded-xl">
              Cancel
            </Button>
            <Button onClick={() => setModalOpen(false)} className="rounded-xl">
              {editUser ? "Save Changes" : "Add User"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminUsers;
