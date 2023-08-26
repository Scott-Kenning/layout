"use client";
import { Flex, Text, Button } from "@radix-ui/themes";

interface HeroProps {
    heroConfig: 1 | 2 | 3;
}

export default function Hero({ heroConfig }: HeroProps) {
    return (
        <Flex className="min-h-[90vh] items-center justify-center">
            {heroConfig === 1 && (
                <Flex direction="row" className="w-full gap-8">
                    <Flex direction="column" className="my-auto">
                        <Text size="9" weight="bold">
                            Modern and Sleek Design
                        </Text>
                        <Text size="5" className="my-4">
                            Experience the future of web design today.
                        </Text>
                        <Flex gap="4">
                            <Button variant="solid">Get Started</Button>
                            <Button variant="ghost">Learn More</Button>
                        </Flex>
                    </Flex>
                    <img
                        src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                        alt="Hero Image 1"
                        className="w-full max-h-[70vh] object-cover rounded-lg shadow-md"
                    />
                </Flex>
            )}

            {heroConfig === 2 && (
                <Flex direction="column" className="gap-8">
                    <Flex direction="column" className="items-center mx-auto">
                        <Text size="9" weight="bold">
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
                    <Flex gap="8">
                        <img
                            src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                            alt="Hero Image 2"
                            className="w-full max-h-[50vh] object-cover rounded-lg shadow-md"
                        />
                        <img
                            src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                            alt="Hero Image 2"
                            className="w-full max-h-[50vh] object-cover rounded-lg shadow-md"
                        />
                    </Flex>
                </Flex>
            )}

            {heroConfig === 3 && (
                <div className="relative h-screen -z-10">
                    <img
                        src="https://s1.picswalls.com/wallpapers/2014/07/19/colorful-hd-wallpaper_110859659_65.jpg"
                        alt="Hero Image 3"
                        className="w-full h-full object-cover filter brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <Text size="9" weight="bold" className="text-white">
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
