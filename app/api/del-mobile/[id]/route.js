import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

// DELETE MOBILE
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    await deleteDoc(doc(db, "mobiles", id));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
