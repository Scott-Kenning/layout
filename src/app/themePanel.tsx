"use client";
// ThemeControlPanel.tsx

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
} from "@radix-ui/react-dialog";
import {
    Button,
    Card,
    Grid,
    Switch,
    Flex,
    Text,
    Theme,
} from "@radix-ui/themes";
import { ThemeAccentColor } from "@/types";
import { REGULAR_COLORS, DARK_COLORS } from "@/consts";

interface ThemeControlPanelProps {
    toggleDark: () => void;
    setAccentColor: React.Dispatch<React.SetStateAction<ThemeAccentColor>>;
    setHeroConfig: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export default function ThemeControlPanel({
    toggleDark,
    setAccentColor,
    setHeroConfig,
}: ThemeControlPanelProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button>Theme Panel</Button>
            </DialogTrigger>
            <DialogContent className="fixed top-10 right-10 flex items-center justify-center">
                <Card size="4" className="z-[10000]">
                    <Flex direction="column" gap="4">
                        <Flex>
                            <Text size="4" weight="bold">
                                Dark Mode:
                            </Text>
                            <Switch
                                defaultChecked
                                size="2"
                                ml="2"
                                radius="full"
                                onCheckedChange={toggleDark}
                            />
                        </Flex>
                        <Flex direction="column" gap="2">
                            <Text size="4" weight="bold">
                                Light Mode Colours:
                            </Text>
                            <Grid columns="8" gap="2">
                                {REGULAR_COLORS.map((color) => (
                                    <Button
                                        key={color}
                                        onClick={() => setAccentColor(color)}
                                        color={color}
                                        radius="full"
                                        className="w-6 h-6"
                                    ></Button>
                                ))}
                            </Grid>
                        </Flex>
                        <Flex direction="column" gap="2">
                            <Text size="4" weight="bold">
                                Dark Mode Colours:
                            </Text>
                            <Grid columns="8" gap="4">
                                {DARK_COLORS.map((color) => (
                                    <Button
                                        key={color}
                                        onClick={() => setAccentColor(color)}
                                        color={color}
                                        radius="full"
                                        className="w-6 h-6"
                                    ></Button>
                                ))}
                            </Grid>
                        </Flex>
                        <Flex gap="2">
                            <Button onClick={() => setHeroConfig(1)}>
                                Hero 1
                            </Button>
                            <Button onClick={() => setHeroConfig(2)}>
                                Hero 2
                            </Button>
                            <Button onClick={() => setHeroConfig(3)}>
                                Hero 3
                            </Button>
                        </Flex>
                    </Flex>
                    <DialogClose className="absolute top-2 right-2 cursor-pointer">
                        <Button color="red">x</Button>
                    </DialogClose>
                </Card>
            </DialogContent>
        </Dialog>
    );
}
