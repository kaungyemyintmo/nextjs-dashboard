import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { fetchInvoiceById } from '@/app/lib/data';
 
export default async function Page(
    props: { params: Promise <{id: string}> }) {
        const params = await props.params;
        //console.log(params);
        console.log(params.id); // %24%7Bid%7D
        const id = decodeURIComponent(params.id);
        console.log(id); // ${id}
        // const id = params.id;
        const [ invoice, customers] = await Promise.all([
            fetchInvoiceById(id),
            fetchCustomers(),
        ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}