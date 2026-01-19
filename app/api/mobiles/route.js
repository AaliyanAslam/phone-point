import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

export async function POST(req) {
  const data = await req.json();

  await addDoc(collection(db, "mobiles"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const snapshot = await getDocs(collection(db, "mobiles"));
  const mobiles = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json(mobiles);
}
