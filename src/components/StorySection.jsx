import Button from "./ui/Button";
import Badge from "./ui/Badge";
import Separator from "./ui/Separator";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import coffeeSplash from "../assets/coffee_splash.png";

const storyHighlights = [
    {
        title: "First Roast",
        value: "2012",
        description: "We launched with a single roast, a small team, and a big idea to bring better beans to every cup."
    },
    {
        title: "Small Batches",
        value: "12-25 lbs",
        description: "Every order is roasted in small, fresh batches so the flavor arrives bright and balanced."
    },
    {
        title: "Global Origins",
        value: "4 continents",
        description: "Our partner farms span Ethiopia, Colombia, Guatemala, and remote Indonesian hills."
    }
];

export default function StorySection() {
    return (
        <div className="story-content">
            <div className="story-header">
                <ScrollReveal animation="fadeUp">
                    <Badge variant="default" className="mb-4">
                        The Journey Behind Every Cup
                    </Badge>
                </ScrollReveal>

                <ScrollReveal animation="fadeUp" delay={0.1}>
                    <h2 className="story-title">
                        From Harvest to Home <span className="muted">— A Coffee Ritual</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal animation="fadeIn" delay={0.2}>
                    <Separator className="mb-8 max-w-56" />
                </ScrollReveal>

                <ScrollReveal animation="fadeUp" delay={0.25}>
                    <p className="story-lead">
                        We turn every roast into a story worth savoring. From farm relationships and cupping sessions to your morning mug, our craft is designed to bring warmth, clarity, and a sense of discovery to every sip.
                    </p>
                </ScrollReveal>
            </div>

            <div className="story-grid">
                <ScrollReveal animation="fadeRight" className="story-copy">
                    <p className="story-body">
                        Our founders met over a shared love of precision brewing and the belief that coffee should feel personal. We source directly from growers, roast to order, and build small-lot offerings that showcase each origin's natural character.
                    </p>
                    <p className="story-body">
                        From our first garage roast to today's specialty releases, every step is chosen to preserve freshness. It's a ritual of taste, care, and thoughtful craftsmanship that shows in every cup.
                    </p>

                    <div className="story-actions">
                        <Button
                            variant="accent"
                            size="lg"
                            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Browse Roasts
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Meet the Roasters
                        </Button>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeLeft" delay={0.15} className="story-visual">
                    <div className="story-image-card">
                        <img
                            src={coffeeSplash}
                            alt="Artful coffee splash in a ceramic mug"
                            className="story-image"
                        />
                        <div className="story-image-badge">
                            <span>AI-inspired concept</span>
                            <strong>Roast Ritual</strong>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <StaggerContainer staggerDelay={0.12} className="story-details-grid">
                {storyHighlights.map((item) => (
                    <StaggerItem key={item.title} animation="fadeUp">
                        <div className="story-stat-card">
                            <div className="story-stat-value">{item.value}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
