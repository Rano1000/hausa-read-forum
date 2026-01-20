"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import clsx from "clsx";

const filters = ['All Materials', 'Books', 'Manuscripts', 'Journals', 'Maps', 'History', 'Culture', 'Language', 'Religion'];

export const BookFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentFilter = searchParams.get("category") || "All Materials";
    const [isPending, startTransition] = useTransition();

    const handleFilter = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        if (filter === "All Materials") {
            params.delete("category");
        } else {
            params.set("category", filter);
        }

        startTransition(() => {
            router.push(`/books?${params.toString()}`);
        });
    };

    return (
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => handleFilter(filter)}
                    disabled={isPending}
                    className={clsx(
                        "px-4 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50",
                        currentFilter === filter
                            ? "bg-[var(--primary)] text-white shadow-md btn-primary"
                            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    )}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};
