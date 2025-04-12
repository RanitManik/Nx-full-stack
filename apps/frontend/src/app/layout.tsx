import "./global.css";
import { Providers } from "@/app/providers";
import React from "react";

export const metadata = {
    title: "Welcome to frontend",
    description: "Generated by create-nx-workspace",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
