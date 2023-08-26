"use client";
import "@radix-ui/themes/styles.css";
import { Theme, Button, Flex, Text } from "@radix-ui/themes";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeAccentColor } from "@/types";
import Hero from "./components/Hero";

const ThemeControlPanel = dynamic(() => import("./themePanel"), {
    ssr: false,
});

export default function Home() {
    const [dark, setDark] = useState(true);
    const [accentColor, setAccentColor] = useState<ThemeAccentColor>("iris");
    const [heroConfig, setHeroConfig] = useState<1 | 2 | 3>(1);
    const [animateThemePanel, setAnimateThemePanel] = useState(false);

    useEffect(() => {
        if (animateThemePanel) {
            const timer = setTimeout(() => {
                setAnimateThemePanel(false);
            }, 600); // Assuming the animation duration is 1 second

            return () => clearTimeout(timer);
        }
    }, [animateThemePanel]);

    return (
        <html lang="en">
            <body>
                <Theme
                    appearance={dark ? "dark" : "light"}
                    accentColor={accentColor}
                >
                    <main className="flex min-h-screen flex-col items-center justify-between">
                        <div
                            className={`fixed w-full ${
                                dark ? "bg-[#18181A] shadow-xl" : "bg-white"
                            }`}
                        >
                            <Flex className="justify-between items-center p-4 md:px-12">
                                <Text size="6" weight="bold">
                                    Your Logo
                                </Text>
                                <Flex gap="8" align="center">
                                    <Button
                                        variant="ghost"
                                        size="4"
                                        className="hidden md:inline-block"
                                    >
                                        Source
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="4"
                                        className="hidden md:inline-block"
                                    >
                                        Portfolio
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="4"
                                        className="hidden md:inline-block"
                                    >
                                        Back to Top
                                    </Button>
                                    <ThemeControlPanel
                                        animateThemePanel={animateThemePanel}
                                        toggleDark={() => setDark(!dark)}
                                        setAccentColor={setAccentColor}
                                        setHeroConfig={setHeroConfig}
                                    />
                                </Flex>
                            </Flex>
                            <hr
                                className={
                                    dark ? "border-t border-gray-700" : ""
                                }
                            />
                        </div>
                        <Flex direction="column" className="md:px-24 mt-16">
                            <Hero
                                heroConfig={heroConfig}
                                onGetStartedClick={() =>
                                    setAnimateThemePanel(true)
                                }
                            />
                        </Flex>
                    </main>
                </Theme>
            </body>
        </html>
    );
}
