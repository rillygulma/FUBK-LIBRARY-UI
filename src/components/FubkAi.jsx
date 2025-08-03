// ChatBot.jsx

import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Bot, SendHorizonal, User, X } from "lucide-react";
import fubkLogo from "../assets/fubk-logo.jpg";
import "../lib/utils";

const LOCAL_STORAGE_KEY = "fubk_academic_chat_history";

const ChatBot = () => {
  const initialMessage = {
    sender: "bot",
    content:
      "Hi 👋 I'm your FUBK Academic Assistant.\nAsk me any academic-related question!",
  };

  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setMessages(JSON.parse(saved));
      setIsSaved(true);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setIsSaved(false);

    try {
      const res = await fetch(
        "https://fubk-library-backend-server.onrender.com/api/askAi/aIchat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();
      const botMsg = {
        sender: "bot",
        content: data.reply || "No reply received.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          content: "Sorry, I couldn't respond due to an error.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([initialMessage]);
    setIsSaved(false);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const saveChat = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    setIsSaved(true);
  };

  const downloadChat = () => {
    const chatText = messages
      .map((msg) => `${msg.sender.toUpperCase()}: ${msg.content}`)
      .join("\n\n");

    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "fubk-academic-chat.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          className="rounded-full bg-blue-700 text-white px-4 py-2 shadow-lg hover:bg-blue-800"
          onClick={() => setIsOpen(true)}
        >
          💬 Chat
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 lg:right-16 left-0 sm:left-auto w-full sm:w-auto px-2 z-50 mt-[100px] sm:mt-0 pt-[70px] sm:pt-0">
      <Card className="h-[75vh] sm:h-[70vh] lg:h-[80vh] w-full sm:w-[380px] lg:w-[500px] flex flex-col shadow-xl rounded-t-2xl sm:rounded-3xl overflow-hidden border bg-white">
        {/* Header */}
        <CardHeader className="flex justify-between items-center px-4 py-3 sm:px-15 bg-blue-600 text-white font-semibold text-base sm:text-lg">
          <div className="flex items-center gap-2">
            <img
              src={fubkLogo}
              alt="FUBK Logo"
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <span className="hidden sm:inline">FUBK LIBRARY AI</span>
            <span className="inline sm:hidden text-sm font-medium">
              AI Librarian
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isSaved && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-white hover:text-green-200"
                onClick={downloadChat}
              >
                Download
              </Button>
            )}
            {!isSaved && messages.some((msg) => msg.sender === "user") && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-white hover:text-emerald-200"
                onClick={saveChat}
              >
                Save
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-white hover:text-yellow-200"
              onClick={clearChat}
            >
              Clear
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-hidden px-2 py-1 sm:px-3 sm:py-2">
          <ScrollArea className="h-full pr-2">
            <div className="flex flex-col gap-3 sm:gap-4 py-1 sm:py-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] px-3 py-2 text-sm rounded-xl whitespace-pre-line shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <span className="flex items-start gap-2">
                      {msg.sender === "bot" && (
                        <Bot className="w-4 h-4 mt-1 text-blue-500" />
                      )}
                      <div>
                        {msg.content.split("\n").map((line, i) => (
                          <p key={i} className="leading-relaxed text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                      {msg.sender === "user" && (
                        <User className="w-4 h-4 mt-1 text-white" />
                      )}
                    </span>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-sm italic text-gray-500 pl-2">
                  Assistant is typing...
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>
        </CardContent>

        {/* Input */}
        <CardFooter className="p-2 sm:p-4 border-t bg-white">
          <div className="flex items-center gap-2 w-full">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about courses, books, research..."
              className="flex-1 rounded-full text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button
              onClick={sendMessage}
              size="icon"
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <SendHorizonal className="w-5 h-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatBot;
