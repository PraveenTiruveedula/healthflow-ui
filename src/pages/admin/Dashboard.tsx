import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PatientDetailModal } from "@/components/admin/PatientDetailModal";
import { Search, Eye } from "lucide-react";

type PatientStatus = "qualified" | "rejected" | "in-progress" | "needs-attention" | "new" | "enrolled";

interface Patient {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  status: PatientStatus;
  needsAttention: boolean;
}

const mockPatients: Patient[] = [
  { id: "PT-001", date: "2026-03-25", name: "Sarah Johnson", email: "sarah@email.com", phone: "(555) 111-2233", status: "qualified", needsAttention: false },
  { id: "PT-002", date: "2026-03-24", name: "Michael Chen", email: "mchen@email.com", phone: "(555) 222-3344", status: "in-progress", needsAttention: true },
  { id: "PT-003", date: "2026-03-24", name: "Emily Davis", email: "edavis@email.com", phone: "(555) 333-4455", status: "new", needsAttention: false },
  { id: "PT-004", date: "2026-03-23", name: "James Wilson", email: "jwilson@email.com", phone: "(555) 444-5566", status: "rejected", needsAttention: false },
  { id: "PT-005", date: "2026-03-22", name: "Maria Garcia", email: "mgarcia@email.com", phone: "(555) 555-6677", status: "enrolled", needsAttention: false },
  { id: "PT-006", date: "2026-03-22", name: "Robert Brown", email: "rbrown@email.com", phone: "(555) 666-7788", status: "needs-attention", needsAttention: true },
  { id: "PT-007", date: "2026-03-21", name: "Lisa Anderson", email: "landerson@email.com", phone: "(555) 777-8899", status: "qualified", needsAttention: false },
];

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const filtered = mockPatients.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout title="Dashboard">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 rounded-xl"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="enrolled">Enrolled</SelectItem>
            <SelectItem value="needs-attention">Needs Attention</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((patient) => (
              <TableRow
                key={patient.id}
                className={patient.needsAttention ? "bg-warning/5" : ""}
              >
                <TableCell className="font-mono text-sm">{patient.id}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{patient.date}</TableCell>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{patient.email}</TableCell>
                <TableCell>
                  <StatusBadge variant={patient.status} />
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <Eye className="h-3.5 w-3.5" /> View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <PatientDetailModal
        patient={selectedPatient}
        open={!!selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />
    </AdminLayout>
  );
};

export default AdminDashboard;
