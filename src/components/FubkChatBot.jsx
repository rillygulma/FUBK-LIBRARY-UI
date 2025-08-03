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
import "../lib/utils";
import fubkLogo from "../assets/fubk-logo.jpg";

const ChatBot = () => {
  const initialMessage = {
    sender: "bot",
    content: "Hi 👋 I'm your Library Assistant. Ask me anything!",
  };

  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const bottomRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://fubk-library-backend-server.onrender.com/api/ai/aIchatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        }
      );

      if (!res.ok) throw new Error("Failed to get a response from server");

      const data = await res.json();
      const botMsg = {
        sender: "bot",
        content: data.reply || "No reply received.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat API error:", err);
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
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="rounded-full shadow-md bg-blue-700 text-white px-4 py-2"
          onClick={() => setIsOpen(true)}
        >
          Chat with Librarian
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-full max-w-sm sm:max-w-md z-50">
      <Card className="h-[70vh] sm:h-[80vh] flex flex-col rounded-2xl shadow-xl relative">
        {/* Top control buttons */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <Button
            size="sm"
            variant="ghost"
            className="text-xs text-gray-600 hover:text-blue-700"
            onClick={clearChat}
          >
            Clear
          </Button>
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header with Logo and Title */}
        <CardHeader>
          <div className="flex items-center justify-center gap-3 text-center">
            <img
              src={fubkLogo}
              alt="FUBK Logo"
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <h2 className="font-bold text-lg sm:text-2xl text-blue-700">
              FUBK AI LIBRARIAN
            </h2>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden px-1">
          <ScrollArea className="h-full pr-3">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] sm:max-w-xs px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <span className="flex items-start gap-2">
                      {msg.sender === "bot" && <Bot className="w-4 h-4 mt-1" />}
                      <div className="flex flex-col gap-1">
                        {msg.content.split("\n").map((line, idx) => (
                          <p key={idx} className="leading-relaxed text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                      {msg.sender === "user" && (
                        <User className="w-4 h-4 mt-1" />
                      )}
                    </span>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-sm text-gray-500 italic ml-2">
                  Typing...
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="flex gap-2 p-2 sm:p-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about books, library hours..."
            className="flex-1 rounded-full text-sm"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={sendMessage} className="rounded-full" size="icon">
            <SendHorizonal className="w-5 h-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatBot;
