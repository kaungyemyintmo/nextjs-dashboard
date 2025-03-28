'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  console.log(searchParams);

  const pathname = usePathname();
  console.log(pathname);

  const { replace } = useRouter();

  // term is the user input
  // debouncing delay the execution of a function until after a certain period of inactivity
  // It helps improve performance by preventing excessive function calls, especially in cases like:
  // Search input fields (API requests on each keystroke)
  // Window resizing events
  // Button click spam prevention
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    console.log(term);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // pathname is the current path > /dashboard/invoices
    // params.toString() translates user input into a url friendly format
    // replace updates the url with the user input 
    // /dashboard/invoices?query=lee
    // **the url is updated without reloading the page
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => { handleSearch(e.target.value); }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
