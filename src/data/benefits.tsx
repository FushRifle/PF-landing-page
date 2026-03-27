import { IBenefit } from "@/types"
import {
    FiUser, FiStar, FiUsers, FiCalendar, FiClock,
    FiCheckCircle, FiZap, FiTarget, FiTrendingUp, FiAward,
    FiHeart,
    FiShield,
} from "react-icons/fi";

export const benefits: IBenefit[] = [
    {
        title: "Child Profile Management",
        description: "Create and manage profiles for multiple family members with shared calendars, tasks, and responsibilities.",
        bullets: [
            {
                title: "Multi-Profile Support",
                description: "Easily switch between family member profiles with role-based permissions and customized views.",
                icon: <FiUsers size={26} />  // Multiple people/family
            },
            {
                title: "Shared Family Calendar",
                description: "Coordinate family activities, appointments, and events across all profiles in one synchronized schedule.",
                icon: <FiCalendar size={26} />  // Scheduling and planning
            },
            {
                title: "Activity History Log",
                description: "Maintain a complete record of all family interactions, tasks completed, and milestone achievements.",
                icon: <FiClock size={26} />  // History and timeline
            }
        ],
        imageSrc: "/mocks/mock5.png"
    },
    {
        title: "Routine Management System",
        description: "Establish structured daily routines that promote consistency, responsibility, and healthy habits for your children.",
        bullets: [
            {
                title: "Customizable Schedules",
                description: "Create personalized routines for mornings, homework, chores, and bedtime with flexible timing options.",
                icon: <FiClock size={26} />  // Time management
            },
            {
                title: "Task Completion Tracking",
                description: "Monitor completion of daily responsibilities with visual progress indicators and achievement badges.",
                icon: <FiCheckCircle size={26} />  // Task completion
            },
            {
                title: "Smart Notifications",
                description: "Receive timely reminders for upcoming tasks, routine transitions, and pending responsibilities.",
                icon: <FiZap size={26} />  // Alerts and reminders
            }
        ],
        imageSrc: "/mocks/mock4.png"
    },
    {
        title: "Goal Achievement Framework",
        description: "Foster personal growth with structured goal-setting tools that make development measurable, achievable, and rewarding.",
        bullets: [
            {
                title: "SMART Goal Planning",
                description: "Set Specific, Measurable, Achievable, Relevant, and Time-bound objectives with guided workflows.",
                icon: <FiTarget size={26} />  // Goals and targets
            },
            {
                title: "Progress Analytics",
                description: "Visualize advancement with detailed metrics, completion rates, and achievement trends over time.",
                icon: <FiTrendingUp size={26} />  // Growth and progress
            },
            {
                title: "Milestone Rewards System",
                description: "Celebrate accomplishments with customizable reward systems that motivate continued growth and effort.",
                icon: <FiAward size={26} />  // Rewards and recognition
            }
        ],
        imageSrc: "/mocks/mock6.png"
    },
];