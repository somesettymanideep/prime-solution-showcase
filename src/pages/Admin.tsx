import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  ContactSubmission,
  getContactSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
} from '@/lib/contactStorage';
import { ArrowLeft, Eye, Trash2, Mail, Phone, Calendar, Briefcase } from 'lucide-react';
import logo from '@/assets/logo.png';

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    setSubmissions(getContactSubmissions());
  };

  const handleView = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    if (submission.status === 'new') {
      updateSubmissionStatus(submission.id, 'read');
      loadSubmissions();
    }
  };

  const handleMarkResponded = (id: string) => {
    updateSubmissionStatus(id, 'responded');
    loadSubmissions();
    setSelectedSubmission(null);
  };

  const handleDelete = () => {
    if (deleteId) {
      deleteSubmission(deleteId);
      loadSubmissions();
      setDeleteId(null);
    }
  };

  const getStatusBadge = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-gold text-navy">New</Badge>;
      case 'read':
        return <Badge variant="secondary">Read</Badge>;
      case 'responded':
        return <Badge className="bg-green-600 text-white">Responded</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy text-white py-4 px-6 shadow-lg">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Prime Solutions" className="h-10" />
            <h1 className="font-display text-xl font-bold">Admin Panel</h1>
          </div>
          <Link to="/">
            <Button variant="goldOutline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Website
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-8">
        <div className="bg-card rounded-2xl shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Contact Submissions</h2>
              <p className="text-muted-foreground">
                {submissions.length} total submissions • {submissions.filter(s => s.status === 'new').length} new
              </p>
            </div>
          </div>

          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">No Submissions Yet</h3>
              <p className="text-muted-foreground">Contact form submissions will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id} className={submission.status === 'new' ? 'bg-gold/5' : ''}>
                      <TableCell>{getStatusBadge(submission.status)}</TableCell>
                      <TableCell className="font-medium">{submission.name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell className="capitalize">{submission.service || '-'}</TableCell>
                      <TableCell>{formatDate(submission.submittedAt)}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleView(submission)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => setDeleteId(submission.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>

      {/* View Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-navy">
              Message from {selectedSubmission?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gold" />
                  <a href={`mailto:${selectedSubmission.email}`} className="text-navy hover:text-gold">
                    {selectedSubmission.email}
                  </a>
                </div>
                {selectedSubmission.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gold" />
                    <a href={`tel:${selectedSubmission.phone}`} className="text-navy hover:text-gold">
                      {selectedSubmission.phone}
                    </a>
                  </div>
                )}
                {selectedSubmission.service && (
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-gold" />
                    <span className="capitalize">{selectedSubmission.service}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedSubmission.submittedAt)}
                </div>
              </div>
              
              <div className="bg-cream rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Message</h4>
                <p className="text-foreground whitespace-pre-wrap">{selectedSubmission.message}</p>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="gold"
                  className="flex-1"
                  onClick={() => window.location.href = `mailto:${selectedSubmission.email}`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Reply via Email
                </Button>
                {selectedSubmission.status !== 'responded' && (
                  <Button
                    variant="navyOutline"
                    onClick={() => handleMarkResponded(selectedSubmission.id)}
                  >
                    Mark as Responded
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Submission?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The submission will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Admin;
