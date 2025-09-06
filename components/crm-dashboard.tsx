"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Search,
  Bell,
  Settings,
  Plus,
  Phone,
  Mail,
  Filter,
  Download,
  BarChart3,
  FileText,
  Target,
  Briefcase,
  MessageSquare,
  Database,
  Zap,
  Crown,
  LogOut,
  HelpCircle,
  ChevronRight,
} from "lucide-react"

export function CRMDashboard() {
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #FAF1E6 0%, #FFFDEC 100%)`,
      }}
    >
      <div className="relative z-10 p-6 grid grid-cols-12 gap-6 h-screen">
        {/* Left Sidebar Card */}
        <Card
          className="col-span-2 rounded-3xl p-6 pb-6 h-fit flex flex-col"
          style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}
        >
          <div className="space-y-6">
            {/* Logo */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">ERP Pro</h1>
            </div>

            {/* Main Navigation */}
            <div>
              <h4 className="text-gray-700 text-sm font-semibold uppercase tracking-wider mb-3">Main Menu</h4>
              <nav className="space-y-2">
                {[
                  { icon: Users, label: "Contacts", active: true },
                  { icon: TrendingUp, label: "Analytics" },
                  { icon: DollarSign, label: "Sales Pipeline" },
                  { icon: Calendar, label: "Calendar" },
                  { icon: Target, label: "Campaigns" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`w-full justify-start text-base text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-700 ease-out hover:scale-[1.02] h-11 ${
                      item.active ? "bg-gray-200 text-gray-900 border border-gray-300" : ""
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            {/* CRM Tools */}
            <div>
              <h4 className="text-gray-700 text-sm font-semibold uppercase tracking-wider mb-3">CRM Tools</h4>
              <nav className="space-y-2">
                {[
                  { icon: FileText, label: "Reports" },
                  { icon: Briefcase, label: "Deals" },
                  { icon: MessageSquare, label: "Messages" },
                  { icon: Database, label: "Data Import" },
                  { icon: BarChart3, label: "Forecasting" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-base text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-700 ease-out hover:scale-[1.02] h-11"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            {/* Administration */}
            <div>
              <h4 className="text-gray-700 text-sm font-semibold uppercase tracking-wider mb-3">Administration</h4>
              <nav className="space-y-2">
                {[
                  { icon: Settings, label: "Settings" },
                  { icon: Zap, label: "Automations" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-base text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-700 ease-out hover:scale-[1.02] h-11"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-shrink-0 space-y-4 pt-4 border-t border-gray-300">
            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border border-yellow-300 rounded-2xl p-4">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <Crown className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold text-lg">Go Premium</h4>
                  <p className="text-gray-600 text-sm">Unlock advanced features</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 transition-all duration-700 ease-out hover:scale-[1.02] text-sm font-medium"
                >
                  Upgrade Now
                  <ChevronRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </Card>

            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-base text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-700 ease-out hover:scale-[1.02] h-11"
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                Contact Support
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-base text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-700 ease-out hover:scale-[1.02] h-11"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content Area */}
        <div className="col-span-8 space-y-6 h-screen overflow-y-auto scrollbar-hide">
          {/* Header Card */}
          <Card className="rounded-3xl p-6" style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Dashboard 📊</h2>
                <p className="text-gray-600">Welcome back! Here's your ERP overview</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search contacts..."
                    className="pl-10 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-500 focus:border-gray-500"
                  />
                </div>
                <Button size="icon" variant="ghost" className="text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button className="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 text-gray-800 transition-all duration-700 ease-out hover:scale-[1.02] px-8 py-3 text-lg font-semibold">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Contact
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { title: "Total Contacts", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
              { title: "Active Deals", value: "156", change: "+8%", icon: TrendingUp, color: "text-green-600" },
              { title: "Revenue", value: "$89.2K", change: "+23%", icon: DollarSign, color: "text-yellow-600" },
              { title: "Meetings", value: "24", change: "+5%", icon: Calendar, color: "text-purple-600" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="rounded-3xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-gray-100"
                style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            ))}
          </div>

          {/* Contacts and Sales Target Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="rounded-3xl p-6" style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Recent Contacts 👥</h3>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" className="text-gray-700 hover:bg-gray-200">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-700 hover:bg-gray-200">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Johnson",
                    email: "sarah@company.com",
                    phone: "+1 (555) 123-4567",
                    company: "TechCorp Inc.",
                    status: "Active",
                    value: "$12.5K",
                    avatar: "SJ",
                  },
                  {
                    name: "Michael Chen",
                    email: "michael@startup.io",
                    phone: "+1 (555) 987-6543",
                    company: "StartupHub",
                    status: "Prospect",
                    value: "$8.2K",
                    avatar: "MC",
                  },
                  {
                    name: "Emily Rodriguez",
                    email: "emily@agency.com",
                    phone: "+1 (555) 456-7890",
                    company: "Creative Agency",
                    status: "Active",
                    value: "$15.7K",
                    avatar: "ER",
                  },
                  {
                    name: "David Kim",
                    email: "david@tech.com",
                    phone: "+1 (555) 321-0987",
                    company: "TechSolutions",
                    status: "Inactive",
                    value: "$3.1K",
                    avatar: "DK",
                  },
                  {
                    name: "Lisa Thompson",
                    email: "lisa@design.co",
                    phone: "+1 (555) 654-3210",
                    company: "Design Studio",
                    status: "Active",
                    value: "$9.8K",
                    avatar: "LT",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/80 rounded-xl border border-gray-200 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gray-200 text-gray-800 text-sm font-medium">
                          {contact.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 text-sm">{contact.name}</p>
                            <p className="text-xs text-gray-600">
                              {contact.company} • {contact.phone}
                            </p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="font-bold text-gray-800 text-sm">{contact.value}</p>
                            <Badge
                              variant={
                                contact.status === "Active"
                                  ? "default"
                                  : contact.status === "Prospect"
                                    ? "secondary"
                                    : "outline"
                              }
                              className={`text-xs ${
                                contact.status === "Active"
                                  ? "bg-green-100 text-green-700 border-green-300"
                                  : contact.status === "Prospect"
                                    ? "bg-blue-100 text-blue-700 border-blue-300"
                                    : "bg-gray-100 text-gray-700 border-gray-300"
                              }`}
                            >
                              {contact.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl p-6" style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Sales Target 🎯</h3>
                <Button size="sm" variant="ghost" className="text-gray-700 hover:bg-gray-200">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Monthly Target Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Monthly Target</span>
                    <span className="text-gray-800 font-semibold">$125K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">$85K achieved</span>
                    <span className="text-gray-600">68%</span>
                  </div>
                </div>

                {/* Quarterly Target Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Quarterly Target</span>
                    <span className="text-gray-800 font-semibold">$375K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-yellow-600">$168K achieved</span>
                    <span className="text-gray-600">45%</span>
                  </div>
                </div>

                {/* Team Performance */}
                <div className="space-y-3">
                  <h4 className="text-gray-800 font-medium">Team Performance</h4>
                  <div className="space-y-2">
                    {[
                      { name: "Sales Team A", progress: 78, color: "from-blue-400 to-purple-500" },
                      { name: "Sales Team B", progress: 62, color: "from-green-400 to-teal-500" },
                      { name: "Sales Team C", progress: 54, color: "from-orange-400 to-red-500" },
                    ].map((team, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">{team.name}</span>
                          <span className="text-gray-800">{team.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${team.color} h-2 rounded-full`}
                            style={{ width: `${team.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Days Remaining */}
                <div className="bg-white/80 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-800">12</p>
                  <p className="text-gray-600 text-sm">Days left in month</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Full-width Premium Upgrade Banner */}
          <Card className="rounded-3xl p-8" style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-200 border border-gray-300 rounded-2xl">
                  <Crown className="h-8 w-8 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Upgrade to ERP Pro Premium</h3>
                  <p className="text-gray-700 text-lg mb-3">
                    Unlock advanced analytics, unlimited contacts, and premium integrations
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Advanced Reports</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Unlimited Storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Priority Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>API Access</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-4">
                <div className="bg-white/80 rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-600 text-sm">Switch to Annual</p>
                  <p className="text-2xl font-bold text-gray-800">$79/month → $63/month</p>
                  <p className="text-sm font-medium text-amber-600">Save 20%</p>
                </div>
                <Button
                  size="lg"
                  className="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 text-gray-800 transition-all duration-700 ease-out hover:scale-[1.02] px-8 py-3 text-lg font-semibold"
                >
                  Upgrade Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar Card */}
        <Card
          className="col-span-2 rounded-3xl p-6 pb-6 h-fit"
          style={{ background: "linear-gradient(to right, #FFFDEC, #E4EFE7)" }}
        >
          <div className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions ⚡</h3>
              <div className="space-y-2">
                {[
                  { icon: Phone, label: "Schedule Call" },
                  { icon: Mail, label: "Send Email" },
                  { icon: Calendar, label: "Book Meeting" },
                  { icon: Plus, label: "Add Note" },
                ].map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-700 ease-out hover:scale-[1.02]"
                  >
                    <action.icon className="mr-3 h-4 w-4" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* AI Xperia Card */}
            <Card className="bg-gray-100 border border-gray-200 rounded-2xl p-4">
              <div className="text-center space-y-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h4 className="text-gray-800 font-semibold">Talk to our new AI</h4>
                  <p className="text-gray-600 text-sm">Xperia</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 text-gray-800 transition-all duration-700 ease-out hover:scale-[1.02]"
                >
                  Start Chat
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity 📈</h3>
              <div className="space-y-3">
                {[
                  { action: "New contact added", time: "2 min ago", type: "success" },
                  { action: "Deal closed", time: "1 hour ago", type: "success" },
                  { action: "Meeting scheduled", time: "3 hours ago", type: "info" },
                  { action: "Email sent", time: "5 hours ago", type: "default" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/80 rounded-xl">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "success"
                          ? "bg-green-400"
                          : activity.type === "info"
                            ? "bg-blue-400"
                            : "bg-gray-400"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performers 🏆</h3>
              <div className="space-y-3">
                {[
                  { name: "Alex Smith", deals: 12, avatar: "AS" },
                  { name: "Maria Garcia", deals: 9, avatar: "MG" },
                  { name: "John Doe", deals: 7, avatar: "JD" },
                ].map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gray-200 text-gray-800 text-xs">
                          {performer.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{performer.name}</p>
                        <p className="text-xs text-gray-600">{performer.deals} deals</p>
                      </div>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800 border-gray-200">#{index + 1}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer Attribution */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gray-100 border border-gray-200 rounded-full px-6 py-2">
          <p className="text-gray-700 text-sm">Developed with tedekstra</p>
        </div>
      </div>
    </div>
  )
}
