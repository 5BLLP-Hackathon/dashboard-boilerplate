"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", prevented: 243, allowed: 2323, elevated: 244 },
  { date: "2024-04-02", prevented: 132, allowed: 2532, elevated: 212 },
  { date: "2024-04-03", prevented: 324, allowed: 2678, elevated: 324 },
  { date: "2024-04-04", prevented: 243, allowed: 2819, elevated: 233 },
  { date: "2024-04-05", prevented: 433, allowed: 2901, elevated: 321 },
  { date: "2024-04-06", prevented: 234, allowed: 2755, elevated: 242 },
  { date: "2024-04-07", prevented: 324, allowed: 2894, elevated: 263 },
  { date: "2024-04-08", prevented: 298, allowed: 2842, elevated: 332 },
  { date: "2024-04-09", prevented: 412, allowed: 2967, elevated: 321 },
  { date: "2024-04-10", prevented: 232, allowed: 2673, elevated: 213 },
  { date: "2024-04-11", prevented: 311, allowed: 2794, elevated: 212 },
  { date: "2024-04-12", prevented: 242, allowed: 2751, elevated: 242 },
  { date: "2024-04-13", prevented: 354, allowed: 2582, elevated: 342 },
  { date: "2024-04-14", prevented: 213, allowed: 2637, elevated: 265 },
  { date: "2024-04-15", prevented: 354, allowed: 2782, elevated: 232 },
  { date: "2024-04-16", prevented: 290, allowed: 2815, elevated: 310 },
  { date: "2024-04-17", prevented: 382, allowed: 2920, elevated: 287 },
  { date: "2024-04-18", prevented: 408, allowed: 3081, elevated: 312 },
  { date: "2024-04-19", prevented: 310, allowed: 2754, elevated: 295 },
  { date: "2024-04-20", prevented: 267, allowed: 2669, elevated: 254 },
  { date: "2024-04-21", prevented: 198, allowed: 2784, elevated: 277 },
  { date: "2024-04-22", prevented: 254, allowed: 2901, elevated: 286 },
  { date: "2024-04-23", prevented: 277, allowed: 2755, elevated: 275 },
  { date: "2024-04-24", prevented: 369, allowed: 2933, elevated: 334 },
  { date: "2024-04-25", prevented: 211, allowed: 2812, elevated: 245 },
  { date: "2024-04-26", prevented: 220, allowed: 2649, elevated: 232 },
  { date: "2024-04-27", prevented: 342, allowed: 2950, elevated: 298 },
  { date: "2024-04-28", prevented: 189, allowed: 2771, elevated: 301 },
  { date: "2024-04-29", prevented: 323, allowed: 2904, elevated: 272 },
  { date: "2024-04-30", prevented: 412, allowed: 3055, elevated: 335 },
  { date: "2024-05-01", prevented: 205, allowed: 2720, elevated: 251 },
  { date: "2024-05-02", prevented: 272, allowed: 2865, elevated: 290 },
  { date: "2024-05-03", prevented: 289, allowed: 2750, elevated: 310 },
  { date: "2024-05-04", prevented: 338, allowed: 2922, elevated: 331 },
  { date: "2024-05-05", prevented: 412, allowed: 3100, elevated: 315 },
  { date: "2024-05-06", prevented: 398, allowed: 3255, elevated: 315 },
  { date: "2024-05-07", prevented: 322, allowed: 2910, elevated: 274 },
  { date: "2024-05-08", prevented: 214, allowed: 2742, elevated: 213 },
  { date: "2024-05-09", prevented: 244, allowed: 2850, elevated: 270 },
  { date: "2024-05-10", prevented: 283, allowed: 2995, elevated: 330 },
  { date: "2024-05-11", prevented: 325, allowed: 2725, elevated: 300 },
  { date: "2024-05-12", prevented: 213, allowed: 2852, elevated: 266 },
  { date: "2024-05-13", prevented: 232, allowed: 2789, elevated: 234 },
  { date: "2024-05-14", prevented: 340, allowed: 3099, elevated: 332 },
  { date: "2024-05-15", prevented: 389, allowed: 2951, elevated: 355 },
  { date: "2024-05-16", prevented: 284, allowed: 2805, elevated: 284 },
  { date: "2024-05-17", prevented: 322, allowed: 2902, elevated: 307 },
  { date: "2024-05-18", prevented: 314, allowed: 3032, elevated: 295 },
  { date: "2024-05-19", prevented: 188, allowed: 2599, elevated: 272 },
  { date: "2024-05-20", prevented: 210, allowed: 2670, elevated: 290 },
  { date: "2024-05-21", prevented: 135, allowed: 2817, elevated: 222 },
  { date: "2024-05-22", prevented: 164, allowed: 2720, elevated: 211 },
  { date: "2024-05-23", prevented: 275, allowed: 2945, elevated: 301 },
  { date: "2024-05-24", prevented: 240, allowed: 2794, elevated: 310 },
  { date: "2024-05-25", prevented: 221, allowed: 2684, elevated: 244 },
  { date: "2024-05-26", prevented: 310, allowed: 2861, elevated: 267 },
  { date: "2024-05-27", prevented: 335, allowed: 2972, elevated: 296 },
  { date: "2024-05-28", prevented: 176, allowed: 2743, elevated: 309 },
  { date: "2024-05-29", prevented: 198, allowed: 2609, elevated: 230 },
  { date: "2024-05-30", prevented: 265, allowed: 2887, elevated: 244 },
  { date: "2024-05-31", prevented: 211, allowed: 2694, elevated: 257 },
  { date: "2024-06-01", prevented: 189, allowed: 2812, elevated: 265 },
  { date: "2024-06-02", prevented: 292, allowed: 2904, elevated: 282 },
  { date: "2024-06-03", prevented: 248, allowed: 2755, elevated: 291 },
  { date: "2024-06-04", prevented: 319, allowed: 3103, elevated: 321 },
  { date: "2024-06-05", prevented: 257, allowed: 2851, elevated: 260 },
  { date: "2024-06-06", prevented: 284, allowed: 2752, elevated: 275 },
  { date: "2024-06-07", prevented: 340, allowed: 2950, elevated: 299 },
  { date: "2024-06-08", prevented: 321, allowed: 2905, elevated: 286 },
  { date: "2024-06-09", prevented: 359, allowed: 3085, elevated: 312 },
  { date: "2024-06-10", prevented: 187, allowed: 2801, elevated: 275 },
  { date: "2024-06-11", prevented: 189, allowed: 2750, elevated: 251 },
  { date: "2024-06-12", prevented: 296, allowed: 2912, elevated: 290 },
  { date: "2024-06-13", prevented: 163, allowed: 2825, elevated: 265 },
  { date: "2024-06-14", prevented: 332, allowed: 2976, elevated: 284 },
  { date: "2024-06-15", prevented: 272, allowed: 2903, elevated: 295 },
  { date: "2024-06-16", prevented: 312, allowed: 3055, elevated: 278 },
  { date: "2024-06-17", prevented: 326, allowed: 3201, elevated: 315 },
  { date: "2024-06-18", prevented: 220, allowed: 2840, elevated: 250 },
  { date: "2024-06-19", prevented: 289, allowed: 2970, elevated: 288 },
  { date: "2024-06-20", prevented: 277, allowed: 3105, elevated: 279 },
  { date: "2024-06-21", prevented: 254, allowed: 2902, elevated: 275 },
  { date: "2024-06-22", prevented: 312, allowed: 2955, elevated: 291 },
  { date: "2024-06-23", prevented: 356, allowed: 3057, elevated: 315 },
  { date: "2024-06-24", prevented: 203, allowed: 2745, elevated: 257 },
  { date: "2024-06-25", prevented: 189, allowed: 2691, elevated: 272 },
  { date: "2024-06-26", prevented: 284, allowed: 2908, elevated: 297 },
  { date: "2024-06-27", prevented: 315, allowed: 3070, elevated: 308 },
  { date: "2024-06-28", prevented: 218, allowed: 2805, elevated: 250 },
  { date: "2024-06-29", prevented: 211, allowed: 2699, elevated: 290 },
  { date: "2024-06-30", prevented: 342, allowed: 3080, elevated: 275 },
  { date: "2024-07-01", prevented: 198, allowed: 2870, elevated: 260 },
  { date: "2024-07-02", prevented: 285, allowed: 2960, elevated: 272 },
  { date: "2024-07-03", prevented: 309, allowed: 2982, elevated: 305 },
  { date: "2024-07-04", prevented: 245, allowed: 3120, elevated: 290 },
  { date: "2024-07-05", prevented: 320, allowed: 3250, elevated: 277 },
  { date: "2024-07-06", prevented: 295, allowed: 3187, elevated: 283 },
  { date: "2024-07-07", prevented: 306, allowed: 3099, elevated: 299 },
  { date: "2024-07-08", prevented: 262, allowed: 3302, elevated: 311 },
  { date: "2024-07-09", prevented: 278, allowed: 3085, elevated: 289 },
  { date: "2024-07-10", prevented: 318, allowed: 3200, elevated: 277 },
  { date: "2024-07-11", prevented: 295, allowed: 3057, elevated: 290 },
  { date: "2024-07-12", prevented: 312, allowed: 3102, elevated: 295 },
  { date: "2024-07-13", prevented: 329, allowed: 3250, elevated: 281 },
  { date: "2024-07-14", prevented: 284, allowed: 2975, elevated: 290 },
  { date: "2024-07-15", prevented: 312, allowed: 3090, elevated: 315 },
  { date: "2024-07-16", prevented: 220, allowed: 2932, elevated: 250 },
  { date: "2024-07-17", prevented: 285, allowed: 3150, elevated: 272 },
  { date: "2024-07-18", prevented: 291, allowed: 3088, elevated: 295 },
  { date: "2024-07-19", prevented: 299, allowed: 3220, elevated: 286 },
  { date: "2024-07-20", prevented: 305, allowed: 3305, elevated: 291 },
  { date: "2024-07-21", prevented: 254, allowed: 3170, elevated: 307 },
  { date: "2024-07-22", prevented: 332, allowed: 3285, elevated: 295 },
  { date: "2024-07-23", prevented: 309, allowed: 3105, elevated: 275 },
  { date: "2024-07-24", prevented: 319, allowed: 3220, elevated: 287 },
  { date: "2024-07-25", prevented: 320, allowed: 3150, elevated: 290 },
  { date: "2024-07-26", prevented: 296, allowed: 3005, elevated: 260 },
  { date: "2024-07-27", prevented: 288, allowed: 3088, elevated: 275 },
  { date: "2024-07-28", prevented: 309, allowed: 3270, elevated: 290 },
  { date: "2024-07-29", prevented: 327, allowed: 3105, elevated: 283 },
  { date: "2024-07-30", prevented: 310, allowed: 3225, elevated: 291 },
  { date: "2024-07-31", prevented: 320, allowed: 3350, elevated: 275 },
  { date: "2024-08-01", prevented: 295, allowed: 3280, elevated: 280 },
  { date: "2024-08-02", prevented: 310, allowed: 3100, elevated: 305 },
  { date: "2024-08-03", prevented: 320, allowed: 3215, elevated: 275 },
  { date: "2024-08-04", prevented: 299, allowed: 3250, elevated: 289 },
  { date: "2024-08-05", prevented: 310, allowed: 3320, elevated: 295 },
  { date: "2024-08-06", prevented: 280, allowed: 3400, elevated: 270 },
  { date: "2024-08-07", prevented: 330, allowed: 3285, elevated: 300 },
  { date: "2024-08-08", prevented: 298, allowed: 3120, elevated: 290 },
];

const chartConfig = {
  visitors: {
    label: "Requests",
  },
  prevented: {
    label: "Prevented",
    color: "hsl(var(--chart-1))",
  },
  allowed: {
    label: "Allowed",
    color: "hsl(var(--chart-2))",
  },
  elevated: {
    label: "Elevated",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function AreaChartComp() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Requests</CardTitle>
          <CardDescription>
            Showing total requests filtered for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillPrevented" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-prevented)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-prevented)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAllowed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-allowed)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-allowed)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillElevated" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-elevated)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-elevated)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="allowed"
              type="natural"
              fill="url(#fillAllowed)"
              stroke="var(--color-allowed)"
              stackId="a"
            />
            <Area
              dataKey="prevented"
              type="natural"
              fill="url(#fillPrevented)"
              stroke="var(--color-prevented)"
              stackId="c"
            />
            <Area
              dataKey="elevated"
              type="natural"
              fill="url(#fillElevated)"
              stroke="var(--color-elevated)"
              stackId="b"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )  
}
