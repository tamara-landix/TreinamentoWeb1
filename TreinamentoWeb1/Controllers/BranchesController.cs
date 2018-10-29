﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using TreinamentoWeb1.Models.Entity;

namespace TreinamentoWeb1.Controllers
{
    public class BranchesController : Controller
    {
        private treinamentowebEntities db = new treinamentowebEntities();

        // GET: Branches
        public ActionResult Index(string name, int? description, int? type, int? product, int? page)
        {
            if (Session["user"] != null)
            {
                var branches = db.branches.Where(u => (string.IsNullOrEmpty(name) || u.name.Contains(name)) &&
                                                      (description == null || u.description == description) &&
                                                      (type == null || u.type == type) &&
                                                      (product == null || u.product == product)
                                                ).ToList();

                ViewBag.Name = name;
                ViewBag.Description = description;
                ViewBag.Type = type;
                ViewBag.Product = product;

                ViewBag.Count = branches.Count;
                ViewBag.Page = page ?? 1;

                return View(branches.Skip(page.HasValue ? (page.Value - 1) * 10 : 0).Take(10));
            }

            return RedirectToAction("Index", "Login");
        }

        // GET: Branches/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            branches branches = db.branches.Find(id);
            if (branches == null)
            {
                return HttpNotFound();
            }
            return View(branches);
        }

        // GET: Branches/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Branches/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "name,description,merge_executed,parent_branch,type,product,id")] branches branches)
        {
            if (ModelState.IsValid)
            {
                db.branches.Add(branches);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(branches);
        }

        // GET: Branches/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            branches branches = db.branches.Find(id);
            if (branches == null)
            {
                return HttpNotFound();
            }
            return View(branches);
        }

        // POST: Branches/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "name,description,merge_executed,parent_branch,type,product,id")] branches branches)
        {
            if (ModelState.IsValid)
            {
                db.Entry(branches).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(branches);
        }

        // GET: Branches/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            branches branches = db.branches.Find(id);
            if (branches == null)
            {
                return HttpNotFound();
            }
            return View(branches);
        }

        // POST: Branches/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            branches branches = db.branches.Find(id);
            db.branches.Remove(branches);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost, ActionName("Branches")]
        public JsonResult ListBranches(int offset, int limit, string term)
        {
            return Json(db.users.Where(u => u.name.Contains(term)).ToList().Skip(offset).Take(limit), JsonRequestBehavior.AllowGet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
