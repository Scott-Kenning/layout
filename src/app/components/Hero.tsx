"use client";
import { Flex, Text, Button } from "@radix-ui/themes";
import dynamic from "next/dynamic";
const ThemeControlPanel = dynamic(() => import("../themePanel"), {
    ssr: false,
});

interface HeroProps {
    heroConfig: 1 | 2 | 3;
    onGetStartedClick: () => void;
}

export default function Hero({ heroConfig, onGetStartedClick }: HeroProps) {
    return (
        <Flex className="min-h-[90vh] items-center justify-center">
            {heroConfig === 1 && (
                <Flex
                    direction="row"
                    className="w-full gap-8 md:flex-row flex-col px-8 md:px-0"
                >
                    <Flex direction="column" className="my-auto">
                        <Text
                            size="9"
                            weight="bold"
                            className="md:text-9 text-6"
                        >
                            Design your own website
                        </Text>
                        <Text size="5" className="my-4">
                            Customize with the "Edit Theme" button in the top
                            right corner.
                        </Text>
                        <Flex gap="4">
                            <Button variant="solid" onClick={onGetStartedClick}>
                                Show Me
                            </Button>
                            <Button variant="ghost">Learn More</Button>
                        </Flex>
                    </Flex>
                    <img
                        src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                        alt="Hero Image 1"
                        className="w-full max-w-[50vw] object-cover rounded-lg shadow-md md:max-w-[50vw] max-w-full"
                    />
                </Flex>
            )}

            {heroConfig === 2 && (
                <Flex
                    direction="column"
                    className="gap-8 min-h-[90vh] mt-32 px-8 md:px-0"
                >
                    <Flex direction="column" className="items-center mx-auto">
                        <Text
                            size="9"
                            weight="bold"
                            className="md:text-9 text-6"
                        >
                            Bold and Vibrant Style
                        </Text>
                        <Text size="5" className="my-4">
                            Stand out from the crowd with our unique designs.
                        </Text>
                        <Flex gap="4">
                            <Button variant="solid">Join Us</Button>
                            <Button variant="ghost">See Portfolio</Button>
                        </Flex>
                    </Flex>
                    <Flex gap="8" className="flex-wrap md:flex-nowrap">
                        <img
                            src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                            alt="Hero Image 2"
                            className="w-full max-h-[50vh] object-cover rounded-lg shadow-md md:w-1/2"
                        />
                        <img
                            src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                            alt="Hero Image 2"
                            className="w-full max-h-[50vh] object-cover rounded-lg shadow-md md:w-1/2"
                        />
                    </Flex>
                </Flex>
            )}

            {heroConfig === 3 && (
                <div className="relative h-screen -z-10 min-h-[90vh] ">
                    <img
                        src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                        alt="Hero Image 3"
                        className="w-full h-full object-cover filter brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
                        <Text
                            size="9"
                            weight="bold"
                            className="text-white md:text-9 text-6"
                        >
                            Nature Inspired Theme
                        </Text>
                        <Text size="5" className="my-4 text-white">
                            Bring the serenity of nature to your website.
                        </Text>
                        <Flex gap="4">
                            <Button variant="solid">Explore</Button>
                            <Button variant="ghost">Contact Us</Button>
                        </Flex>
                    </div>
                </div>
            )}
        </Flex>
    );
}
